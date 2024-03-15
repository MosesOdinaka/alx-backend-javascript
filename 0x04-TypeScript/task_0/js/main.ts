interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student_1: Student = {
    firstName: "Moses",
    lastName: "Iriele",
    age: 33,
    location: "Lagos",
};

const student_2: Student = {
    firstName: "Okechukwu",
    lastName: "Iriele",
    age: 36,
    location: "Europe",
};

const studentList: Student[] = [student_1, student_2];

function createTable(): void {
    const table = document.createElement("table");
    const tableHead = document.createElement("thead");
    const tableBody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    const firstNameHeader = document.createElement("th");
    const locationHeader = document.createElement("th");

    firstNameHeader.textContent = "First Name";
    locationHeader.textContent = "Location";

    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    tableHead.appendChild(headerRow);
    table.appendChild(tableHead);

    studentList.forEach((student) => {
        const row = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        const locationCell = document.createElement("td");

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
}

createTable();
