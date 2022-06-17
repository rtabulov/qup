import * as ExcelJS from 'exceljs';
import { groupBy, sortBy } from 'lodash';
import { Certificate, FileMeta, User, Department } from '@prisma/client';

const autoWidth = (worksheet: ExcelJS.Worksheet, minimalWidth = 10) => {
  worksheet.columns.forEach((column) => {
    let maxColumnLength = 0;
    column.eachCell({ includeEmpty: true }, (cell) => {
      maxColumnLength = Math.max(
        maxColumnLength,
        minimalWidth,
        cell.value
          ? cell.value instanceof Date
            ? 8
            : cell.value.toString().length
          : 0,
      );
    });
    column.width = maxColumnLength + 2;
  });
};

export function genereateReport(
  certificates: (Certificate & {
    files: FileMeta[];
    teacher: User & {
      department: Department;
    };
  })[],
  host: string,
) {
  const groupedByDepartments = groupBy(certificates, 'teacher.department.name');

  const workbook = new ExcelJS.Workbook();

  Object.entries(groupedByDepartments).forEach(([department, certificates]) => {
    const ws = workbook.addWorksheet(department);
    ws.columns = [
      // { header: 'ID', key: 'id' },
      { header: 'ФИО преподавателя', key: 'fullName' },
      { header: 'Название курса', key: 'name' },
      { header: 'Кем выдан', key: 'issuedBy' },
      { header: 'Дата выдачи', key: 'issuedDate' },
      { header: 'Дата начала обучения', key: 'startDate' },
      { header: 'Дата окончания обучения', key: 'endDate' },
      { header: 'Прикрепленные файлы', key: 'files' },
    ];
    ws.addRows(
      sortBy(certificates, 'teacher.fullName')
        .map((c) => ({
          ...c,
          teacher: {
            ...c.teacher,
            fullName: `${c.teacher.lastName} ${c.teacher.firstName} ${c.teacher.middleName}`,
          },
        }))
        .map((cert) => ({
          // id: cert.id,
          fullName: cert.teacher.fullName,
          name: cert.name,
          issuedBy: cert.issuedBy,
          issuedDate: new Date(cert.issuedDate),
          startDate: new Date(cert.startDate),
          endDate: new Date(cert.endDate),
          files: cert.files
            .map((f) => `${host}/api/uploads/certificates/${f.name}`)
            .join('\n'),
        })),
    );

    // autoHeight(ws);
    autoWidth(ws);
  });

  return workbook;
}
