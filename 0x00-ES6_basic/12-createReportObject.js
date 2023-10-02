export default function createReportObject(employeesList) {
    const getNumberOfDepartments = (list) => {
      return Object.keys(list).length;
    };
  
    const allEmployees = { ...employeesList };
  
    const reportObject = {
      allEmployees,
      getNumberOfDepartments,
    };
  
    return reportObject;
  }
  