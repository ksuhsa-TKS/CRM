let clientsList = [];

// Получение кода svg картинок.
function getSvg() {
    const phone = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
             <g opacity="0.7">\
                    <circle cx="8" cy="8" r="8" fill="#9873FF" />\
                 <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white" />\
             </g>\
        </svg>';
    const email = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
             <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/>\
        </svg>';
    const vk = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
            <g opacity="0.7">\
                <path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF" />\
            </g>\
        </svg>';
    const facebook = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
            <g opacity="0.7">\
                <path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#9873FF" />\
             </g>\
        </svg>';
    const other = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
             <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#9873FF"/>\
        </svg>';
    const pen = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
          <g opacity="0.7" clip-path="url(#clip0_224_718)">\
            <path d="M2 11.5002V14.0002H4.5L11.8733 6.62687L9.37333 4.12687L2 11.5002ZM13.8067 4.69354C14.0667 4.43354 14.0667 4.01354 13.8067 3.75354L12.2467 2.19354C11.9867 1.93354 11.5667 1.93354 11.3067 2.19354L10.0867 3.41354L12.5867 5.91354L13.8067 4.69354Z" fill="#9873FF" />\
          </g>\
          <defs>\
            <clipPath id="clip0_224_718">\
              <rect width="16" height="16" fill="white" />\
            </clipPath>\
          </defs>\
        </svg>';
    const close = '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\
            <g opacity="0.7" clip-path="url(#clip0_224_723)">\
            <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" />\
            </g>\
            <defs>\
            <clipPath id="clip0_224_723">\
                <rect width="16" height="16" />\
            </clipPath>\
            </defs>\
        </svg>';
    const arrow = '<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">\
          <g clip-path="url(#clip0_224_1340)">\
            <path d="M10 6L9.295 5.295L6.5 8.085L6.5 2H5.5L5.5 8.085L2.71 5.29L2 6L6 10L10 6Z" />\
          </g>\
          <defs>\
            <clipPath id="clip0_224_1340">\
              <rect width="12" height="12" />\
            </clipPath>\
          </defs>\
        </svg>';
    const plus = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
            <g clip-path="url(#clip0_224_6287)">\
                <path\
                    d="M7.99998 4.66671C7.63331 4.66671 7.33331 4.96671 7.33331 5.33337V7.33337H5.33331C4.96665 7.33337 4.66665 7.63337 4.66665 8.00004C4.66665 8.36671 4.96665 8.66671 5.33331 8.66671H7.33331V10.6667C7.33331 11.0334 7.63331 11.3334 7.99998 11.3334C8.36665 11.3334 8.66665 11.0334 8.66665 10.6667V8.66671H10.6666C11.0333 8.66671 11.3333 8.36671 11.3333 8.00004C11.3333 7.63337 11.0333 7.33337 10.6666 7.33337H8.66665V5.33337C8.66665 4.96671 8.36665 4.66671 7.99998 4.66671ZM7.99998 1.33337C4.31998 1.33337 1.33331 4.32004 1.33331 8.00004C1.33331 11.68 4.31998 14.6667 7.99998 14.6667C11.68 14.6667 14.6666 11.68 14.6666 8.00004C14.6666 4.32004 11.68 1.33337 7.99998 1.33337ZM7.99998 13.3334C5.05998 13.3334 2.66665 10.94 2.66665 8.00004C2.66665 5.06004 5.05998 2.66671 7.99998 2.66671C10.94 2.66671 13.3333 5.06004 13.3333 8.00004C13.3333 10.94 10.94 13.3334 7.99998 13.3334Z"\
                    fill="#9873FF" />\
            </g>\
            <defs>\
                <clipPath id="clip0_224_6287">\
                    <rect width="16" height="16" fill="white" />\
                </clipPath>\
            </defs>\
        </svg>';
    const closeBig = '<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">\
            <path fill-rule="evenodd" clip-rule="evenodd"\
                d="M22.2332 7.73333L21.2665 6.76666L14.4998 13.5334L7.73318 6.7667L6.76652 7.73336L13.5332 14.5L6.76654 21.2667L7.73321 22.2333L14.4998 15.4667L21.2665 22.2334L22.2332 21.2667L15.4665 14.5L22.2332 7.73333Z"\
                fill="#B0B0B0" />\
        </svg>';
    const loading = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
            <g clip-path="url(#clip0_224_2771)">\
            <path d="M3.00008 8.04008C3.00008 10.8236 5.2566 13.0801 8.04008 13.0801C10.8236 13.0801 13.0801 10.8236 13.0801 8.04008C13.0801 5.2566 10.8236 3.00008 8.04008 3.00008C7.38922 3.00008 6.7672 3.12342 6.196 3.34812" stroke="#9873FF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>\
            </g>\
            <defs>\
            <clipPath id="clip0_224_2771">\
            <rect width="16" height="16" fill="white"/>\
            </clipPath>\
            </defs>\
        </svg>';

    return { phone, email, vk, facebook, other, pen, close, arrow, plus, closeBig, loading };
};

// Работа с запросами на сервер.

async function getListClients(meaning = "list", search = "") {
    let response = "";

    if (meaning === "list") {
        response = await fetch('http://localhost:3000/api/clients', {
            method: 'GET',
        });
    } else {
        response = await fetch(`http://localhost:3000/api/clients?search=${String(search)}`, {
            method: 'GET',
        });
    };

    const clientsList = await response.json();
    if (clientsList.length !== 0) { addRendering(clientsList) };

    return clientsList;
};

async function createClient(surname, name, lastname, contacts) {
    document.querySelector('.modal__form').append(loadingForm());

    const response = await fetch('http://localhost:3000/api/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: editName(name),
            surname: editName(surname),
            lastName: editName(lastname),
            updatedAt: String(new Date()),
            createdAt: String(new Date()),
            contacts: contacts,
        }),
    });
    const client = await response.json();

    getBug(response);
    if (document.querySelectorAll('.bug').length > 0) { return };

    clientsList.push(client);
    addRendering(clientsList);
    closeForm();
};

async function searchClientId(id) {
    const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
        method: 'GET',
    });
    const client = await response.json();

    return client;
};

async function editClientId(id, surname, name, lastname, contacts) {
    document.querySelector('.modal__form').append(loadingForm());

    const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: editName(name),
            surname: editName(surname),
            lastName: editName(lastname),
            updatedAt: String(new Date()),
            contacts: contacts,
        }),
    });
    const client = await response.json();

    getBug(response);
    if (document.querySelectorAll('.bug').length > 0) { return };

    const index = clientsList.findIndex(obj => obj.id === id);
    clientsList.splice(index, 1, client);
    addRendering(clientsList);
    closeForm();
};

async function deleteClient(id) {
    const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
        method: 'DELETE',
    });

    const searchIndex = clientsList.findIndex(obj => obj.id === id);
    clientsList.splice(searchIndex, 1);
    addRendering(clientsList);
};

function getBug(meaning) {
    if (meaning.status === 422 || meaning.status === 404 || meaning.status > 500) {
        if (meaning.statusText.value === '') {
            validation(false, "Что-то пошло не так...");
        } else { validation(false, `${meaning.status}: ${meaning.statusText}`) };
    } else {
        document.querySelector('.anima-wrap-form').remove();
    };
};

// Работа с обработкой клиента.

function getClient(objectClient) {
    const table = document.getElementById('table');
    const tableCell = document.createElement('tr'),
        tableId = document.createElement('td'),
        tableName = document.createElement('td'),
        tableWrapDataCreation = document.createElement('td'),
        tableWrapDataChange = document.createElement('td'),
        tableWrapContacts = document.createElement('td'),
        tableWrapButton = document.createElement('td'),

        tableDateCreation = document.createElement('span'),
        tableTimeCreation = document.createElement('span'),
        tableDateChange = document.createElement('span'),
        tableTimeChange = document.createElement('span'),

        tableTelephone = document.createElement('span'),
        tableEmail = document.createElement('span'),
        tableFacebook = document.createElement('span'),
        tableVk = document.createElement('span'),
        tableOther = document.createElement('span'),
        numberContacts = document.createElement('span'),

        tableBtnEdit = document.createElement('button'),
        tableBtnDelete = document.createElement('button');

    tableCell.classList.add('table__cell');
    tableId.classList.add('table__id', 'table__descr', 'table__descr--grey');
    tableName.classList.add('table__name', 'title', 'table__descr');
    tableWrapDataCreation.classList.add('table__data', 'table__wrap', 'table__wrap--data');
    tableWrapDataChange.classList.add('table__data', 'table__wrap', 'table__wrap--data');
    tableWrapContacts.classList.add('table__link', 'table__wrap');
    tableWrapButton.classList.add('table__btn', 'table__wrap', 'table__wrap--btn');
    tableDateChange.classList.add('table__descr');
    tableTimeChange.classList.add('table__descr', 'table__descr--grey');
    tableDateCreation.classList.add('table__descr');
    tableTimeCreation.classList.add('table__descr', 'table__descr--grey');
    tableTelephone.classList.add('link');
    tableEmail.classList.add('link');
    tableFacebook.classList.add('link');
    tableVk.classList.add('link');
    tableOther.classList.add('link');
    numberContacts.classList.add('icon', 'contacts__number');
    tableBtnEdit.classList.add('btn', 'table__edit');
    tableBtnDelete.classList.add('btn', 'table__delete');

    const getId = document.createElement('span');
    getId.classList.add('text-cloud');
    getId.textContent = objectClient.id;

    let id = "";
    if (objectClient.id.length > 6) {
        let editId = objectClient.id.slice(0, 5);
        id = `${editId}...`;
        tableId.addEventListener('mouseover', () => { tableId.append(getId) });
        tableId.addEventListener('mouseout', () => { getId.remove() });
    } else { id = objectClient.id };

    let dataCreation = getDateSeparation(objectClient.createdAt);
    let getDateCreation = dataCreation.date,
        getTimeCreation = dataCreation.time;

    let dataChange = getDateSeparation(objectClient.updatedAt);
    let getDateChange = dataChange.date,
        getTimeChange = dataChange.time;

    tableId.textContent = id;
    tableName.textContent = getFullName(objectClient);
    tableDateCreation.textContent = getDateCreation;
    tableTimeCreation.textContent = getTimeCreation;
    tableDateChange.textContent = getDateChange;
    tableTimeChange.textContent = getTimeChange;

    tableBtnEdit.textContent = "Изменить";
    tableBtnDelete.textContent = "Удалить";

    table.append(tableCell);
    tableCell.append(tableId, tableName, tableWrapDataCreation, tableWrapDataChange, tableWrapContacts, tableWrapButton);
    tableWrapDataCreation.append(tableDateCreation, tableTimeCreation);
    tableWrapDataChange.append(tableDateChange, tableTimeChange);
    tableWrapButton.append(tableBtnEdit, tableBtnDelete);

    const { phone, email, vk, facebook, other } = getSvg();

    function getLinkContacts(element, icon) {
        const contact = document.createElement('span'),
            svg = document.createElement('span');

        contact.classList.add('text-cloud');
        svg.classList.add('icon');

        contact.textContent = element;
        svg.innerHTML = icon;

        tableWrapContacts.append(svg);

        svg.addEventListener('mouseover', () => {
            svg.append(contact);
        })
        svg.addEventListener('mouseout', () => {
            contact.remove();
        })

        return { contact, icon };
    };

    function generateIcon(string) {
        if (string.includes("Телефон")) { getLinkContacts(string, phone); };
        if (string.includes("Email")) { getLinkContacts(string, email); };
        if (string.includes("Facebook")) { getLinkContacts(string, facebook); };
        if (string.includes("Vk")) { getLinkContacts(string, vk); };
        if (string.includes("Другое")) { getLinkContacts(string, other); };
    };

    function wholeContacts(obj) {
        obj.contacts.forEach(element => {
            const contacts = Object.values(element);
            let result = String(`${contacts[0]}: ${contacts[1]}`);
            generateIcon(result)
        });
    };

    function partContacts(obj) {
        for (let i = 0; i < 4; i++) {
            let contacts = Object.values(obj.contacts[i]);
            let result = String(`${contacts[0]}: ${contacts[1]}`);
            generateIcon(result)
        };
        const number = obj.contacts.length - 4;
        numberContacts.textContent = '+' + number;
        tableWrapContacts.append(numberContacts);
    };

    if (objectClient.contacts) {
        if (objectClient.contacts.length > 5) {
            partContacts(objectClient);
        } else {
            wholeContacts(objectClient);
        };
    };

    numberContacts.addEventListener('click', () => {
        tableWrapContacts.innerHTML = "";
        wholeContacts(objectClient);

        setTimeout(() => {
            tableWrapContacts.innerHTML = "";
            partContacts(objectClient);
        }, 20000)
    });

    tableBtnEdit.addEventListener('click', async () => {
        loadingBtnEdit(tableBtnEdit);
        await completeClientChange(objectClient.id, tableBtnEdit)
        loadingBtnEdit(tableBtnEdit, true);
    });

    tableBtnDelete.addEventListener('click', async () => {
        loadingBtnEdit(tableBtnDelete);
        const client = await searchClientId(objectClient.id);
        loadingBtnEdit(tableBtnDelete, "close");

        const { btnDelete } = windowDeleteClient();

        btnDelete.addEventListener('click', async () => {
            await deleteClient(client.id)
            document.getElementById('removal').remove();
        });
    });
};

async function completeClientChange(id, btn) {
    const client = await searchClientId(id);

    location.hash = `#${client.id}`;

    const { formTitle, formId, btnCancel, btnSave,
        inputSurname, inputName, inputLastname } = createForm();

    document.querySelector('.modal__form').append(loadingForm());

    formTitle.after(formId);

    formTitle.textContent = "Изменить данные";
    formId.textContent = `ID: ${client.id}`;
    btnCancel.textContent = "Удалить клиента";

    inputSurname.value = client.surname;
    inputName.value = client.name;
    if (client.lastName.length > 0) { inputLastname.value = client.lastName };

    checkContactsFilling(client);

    document.querySelector('.anima-wrap-form').remove();

    btnSave.addEventListener('click', e => {
        e.preventDefault();

        checkContactsBug();

        const { surname, name, lastname } = searchFullName(inputSurname, inputName, inputLastname);

        editClientId(client.id, surname, name, lastname, saveContacts());

        if (document.querySelectorAll('.bug').length > 0) { return };
    });

    // Кнопка удаления.
    btnCancel.addEventListener('click', async () => { await deleteClient(client.id) });
}

function getFullName(objectClient) {
    if (objectClient.lastName.length > 0) {
        objectClient.fullName = `${objectClient.surname} ${objectClient.name} ${objectClient.lastName}`
    } else { objectClient.fullName = `${objectClient.surname} ${objectClient.name}` };

    return objectClient.fullName;
};

function getDateSeparation(objectClient) {
    let year = new Date(objectClient).getFullYear();
    let month = new Date(objectClient).getMonth();
    let day = new Date(objectClient).getDate();
    let hours = new Date(objectClient).getHours();
    let minutes = new Date(objectClient).getMinutes();

    if (month < 10) month = `0${month}`;
    if (day < 10) day = `0${day}`;
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;

    let date = `${day}.${month}.${year}`;
    let time = `${hours}:${minutes}`;

    return { date, time }
};

// Уведомление о удалении клиента.

function windowDeleteClient() {
    const { closeBig } = getSvg();
    const removal = document.createElement('article'),
        removalWrap = document.createElement('div'),
        title = document.createElement('h3'),
        descr = document.createElement('p'),
        btnDelete = document.createElement('button'),
        btnCancel = document.createElement('button'),
        btnClose = document.createElement('button');

    removal.classList.add('window');
    removalWrap.classList.add('window__wrap', 'removal__wrap');
    title.classList.add('title', 'removal__title');
    descr.classList.add('removal__descr');
    btnDelete.classList.add('btn', 'window__edit', 'removal__btn-delete');
    btnCancel.classList.add('btn', 'window__cancel', 'removal__btn-cancel');
    btnClose.classList.add('btn', 'window__close', 'removal__btn-close');

    removal.id = "removal";
    btnClose.innerHTML = closeBig;

    title.textContent = "Удалить клиента";
    descr.textContent = "Вы действительно хотите удалить данного клиента?";
    btnDelete.textContent = "Удалить";
    btnCancel.textContent = "Отмена";

    document.querySelector('.body').prepend(removal);
    removal.append(removalWrap);
    removalWrap.append(title, descr, btnDelete, btnCancel, btnClose);

    btnCancel.addEventListener('click', () => { document.getElementById('removal').remove() });
    btnClose.addEventListener('click', () => { document.getElementById('removal').remove() });
    removal.addEventListener('click', e => {
        const notAlert = e.composedPath().includes(removalWrap);
        if (!notAlert) { removal.remove() };
    })

    return { btnDelete, btnCancel, btnClose };
};

// Работа с контактами.

function getContacts() {
    const { close } = getSvg();
    const lableContacts = document.createElement('lable'),
        inputHidden = document.createElement('input'),
        typeContacts = document.createElement('div'),
        listContacts = document.createElement('ul'),
        phoneItemContacts = document.createElement('li'),
        emailItemContacts = document.createElement('li'),
        facebookItemContacts = document.createElement('li'),
        vkItemContacts = document.createElement('li'),
        otherItemContacts = document.createElement('li'),
        phoneContacts = document.createElement('span'),
        emailContacts = document.createElement('span'),
        facebookContacts = document.createElement('span'),
        vkContacts = document.createElement('span'),
        otherContacts = document.createElement('span'),
        valueContacts = document.createElement('input'),
        cleanUpContacts = document.createElement('button');

    lableContacts.classList.add('contacts__lable');
    inputHidden.classList.add('contacts__input');
    typeContacts.classList.add('contacts__type');
    listContacts.classList.add('list-reset', 'contacts__window', 'none');
    phoneItemContacts.classList.add('menu');
    emailItemContacts.classList.add('menu');
    facebookItemContacts.classList.add('menu');
    vkItemContacts.classList.add('menu');
    otherItemContacts.classList.add('menu');
    phoneContacts.classList.add('phone-model', 'span-contact');
    emailContacts.classList.add('email-model', 'span-contact');
    facebookContacts.classList.add('facebook-model', 'span-contact');
    vkContacts.classList.add('vk-model', 'span-contact');
    otherContacts.classList.add('other-model', 'span-contact');
    valueContacts.classList.add('input', 'contacts__value');
    cleanUpContacts.classList.add('btn', 'contacts__clean-up');

    phoneContacts.textContent = "Телефон";
    emailContacts.textContent = "Email";
    facebookContacts.textContent = "Facebook";
    vkContacts.textContent = "Vk";
    otherContacts.textContent = "Другое";
    typeContacts.textContent = phoneContacts.textContent;
    inputHidden.type = "hidden";
    valueContacts.type = "tel";
    valueContacts.name = "Phone";
    valueContacts.placeholder = "Введите данные контакта";
    cleanUpContacts.innerHTML = close;

    typeContacts.addEventListener('click', () => {
        if (typeContacts.classList.contains('open')) {
            classList(listContacts, 'none', typeContacts, 'open')
        } else { classList(typeContacts, 'open', listContacts, 'none') };

        phoneContacts.addEventListener('click', () => {
            listWindow(listContacts, typeContacts, emailItemContacts, facebookItemContacts, vkItemContacts, otherItemContacts,
                phoneContacts, valueContacts, "Phone", "tel");
            classList(listContacts, 'none', typeContacts, 'open');
        });
        emailContacts.addEventListener('click', () => {
            listWindow(listContacts, typeContacts, phoneItemContacts, facebookItemContacts, vkItemContacts, otherItemContacts,
                emailContacts, valueContacts, "Email", "email");
            classList(listContacts, 'none', typeContacts, 'open');
        });
        facebookContacts.addEventListener('click', () => {
            listWindow(listContacts, typeContacts, phoneItemContacts, emailItemContacts, vkItemContacts, otherItemContacts,
                facebookContacts, valueContacts, "Facebook");
            classList(listContacts, 'none', typeContacts, 'open');
        });
        vkContacts.addEventListener('click', () => {
            listWindow(listContacts, typeContacts, phoneItemContacts, emailItemContacts, facebookItemContacts, otherItemContacts,
                vkContacts, valueContacts, "Vk");
            classList(listContacts, 'none', typeContacts, 'open');
        });
        otherContacts.addEventListener('click', () => {
            listWindow(listContacts, typeContacts, phoneItemContacts, emailItemContacts, facebookItemContacts, vkItemContacts,
                otherContacts, valueContacts, "Other");
            classList(listContacts, 'none', typeContacts, 'open');
        });
    });

    valueContacts.addEventListener('input', () => {
        if (valueContacts.value.trim()) { lableContacts.append(cleanUpContacts) };
    });

    cleanUpContacts.addEventListener('click', (e) => {
        e.preventDefault();

        lableContacts.remove();

        const searchType = document.querySelectorAll('.contacts__lable');

        if (searchType.length === 0) {
            document.querySelector('.modal__wrap--contacts').classList.remove('modal__contacts');
            document.querySelector('.contacts').remove();
        };
        if (searchType.length < 10) {
            document.querySelector('.contacts__btn').classList.remove('none');
        };
    });

    lableContacts.append(inputHidden, typeContacts, listContacts, valueContacts);
    listContacts.append(emailItemContacts, facebookItemContacts, vkItemContacts, otherItemContacts);
    phoneItemContacts.append(phoneContacts);
    emailItemContacts.append(emailContacts);
    facebookItemContacts.append(facebookContacts);
    vkItemContacts.append(vkContacts);
    otherItemContacts.append(otherContacts);

    return {
        lableContacts, typeContacts, listContacts, valueContacts,
        phoneItemContacts, emailItemContacts, facebookItemContacts, vkItemContacts, otherItemContacts,
        phoneContacts, emailContacts, facebookContacts, vkContacts, otherContacts
    };
};

function listWindow(list, listTitle, item1, item2, item3, item4, pickItem, input, nameInput, typeInput = 'text') {
    list.innerHTML = '';
    list.append(item1, item2, item3, item4);
    input.type = typeInput;
    input.name = nameInput;
    listTitle.textContent = pickItem.textContent;
};

function classList(add, addClass, remove, removeClass) {
    add.classList.add(addClass);
    remove.classList.remove(removeClass);
};

function blockContacts() {
    const contacts = document.createElement('fieldset'),
        contactsWrap = document.createElement('div'),
        btnContacts = document.createElement('button'),
        wrapFullNameModal = document.querySelector('.modal__wrap--fullName'),
        { plus } = getSvg();

    contacts.classList.add('modal__wrap', 'modal__wrap--contacts');
    contactsWrap.classList.add('modal__wrap', 'contacts', 'none');
    btnContacts.classList.add('btn', 'modal__btn', 'contacts__btn');

    btnContacts.textContent = "Добавить контакт";
    btnContacts.innerHTML += plus;

    wrapFullNameModal.after(contacts);
    contacts.append(contactsWrap, btnContacts);

    btnContacts.addEventListener('click', (e) => {
        e.preventDefault();

        const searchType = document.querySelectorAll('.contacts__lable');

        if (searchType.length >= 10) {
            btnContacts.classList.add('none');
        } else {
            const { lableContacts } = getContacts();

            contacts.prepend(contactsWrap);
            contacts.classList.add('modal__contacts');
            contactsWrap.classList.remove('none');
            contactsWrap.append(lableContacts);
        };
    });

    return { contacts, contactsWrap };
};

function checkContactsFilling(objectClient) {
    const { contacts, contactsWrap } = blockContacts();

    if (objectClient.contacts.length !== 0) {
        contacts.classList.add('modal__contacts');
        contactsWrap.classList.remove('none');

        objectClient.contacts.forEach(element => {
            const { lableContacts, typeContacts, listContacts, valueContacts,
                phoneItemContacts, emailItemContacts, facebookItemContacts, vkItemContacts, otherItemContacts,
                phoneContacts, emailContacts, facebookContacts, vkContacts, otherContacts,
            } = getContacts();
            contactsWrap.append(lableContacts);

            if (element.type === "Телефон") {
                listWindow(listContacts, typeContacts, emailItemContacts, facebookItemContacts, vkItemContacts, otherItemContacts,
                    phoneContacts, valueContacts, "Phone", "tel");
                valueContacts.value = element.value;
            };
            if (element.type === "Email") {
                listWindow(listContacts, typeContacts, phoneItemContacts, facebookItemContacts, vkItemContacts, otherItemContacts,
                    emailContacts, valueContacts, "Email", "email");
                valueContacts.value = element.value;
            };
            if (element.type === "Facebook") {
                listWindow(listContacts, typeContacts, phoneItemContacts, emailItemContacts, vkItemContacts, otherItemContacts,
                    facebookContacts, valueContacts, "Facebook");
                valueContacts.value = element.value;
            };
            if (element.type === "Vk") {
                listWindow(listContacts, typeContacts, phoneItemContacts, emailItemContacts, facebookItemContacts, otherItemContacts,
                    vkContacts, valueContacts, "Vk");
                valueContacts.value = element.value;
            };
            if (element.type === "Другое") {
                listWindow(listContacts, typeContacts, phoneItemContacts, emailItemContacts, facebookItemContacts, vkItemContacts,
                    otherContacts, valueContacts, "Other");
                valueContacts.value = element.value;
            };
        });
    };
}

function checkContactsBug() {
    document.querySelectorAll('.contacts__value').forEach(contact => {
        if (!contact.value.trim()) {
            if (contact.name === "Email") { validation(contact, "Введи корректный Email") };
            if (contact.name === "Facebook") { validation(contact, "Введи корректное id Facebook") };
            if (contact.name === "Vk") { validation(contact, "Введи корректное id Vk") };
            if (contact.name === "Other") { validation(contact, "Введи корректные данные") };
        };

        if (contact.name === "Phone") {
            if (!contact.value.trim() || isNaN(contact.value.trim())) {
                if (contact.name === "Phone") { validation(contact, "Введи корректный номер Телефона") };
            };
            contact.addEventListener('input', () => {
                document.querySelectorAll('.bug').forEach(bug => { if (bug.textContent.includes("Введи корректный номер Телефона")) { bug.remove() } });
                contact.classList.remove('input__bug');
            });
        };
        if (contact.name === "Email") {
            contact.addEventListener('input', () => {
                document.querySelectorAll('.bug').forEach(bug => { if (bug.textContent.includes("Введи корректный Email")) { bug.remove() } });
                contact.classList.remove('input__bug');
            });
        };
        if (contact.name === "Facebook") {
            contact.addEventListener('input', () => {
                document.querySelectorAll('.bug').forEach(bug => { if (bug.textContent.includes("Введи корректное id Facebook")) { bug.remove() } });
                contact.classList.remove('input__bug');
            });
        };
        if (contact.name === "Vk") {
            contact.addEventListener('input', () => {
                document.querySelectorAll('.bug').forEach(bug => { if (bug.textContent.includes("Введи корректное id Vk")) { bug.remove() } });
                contact.classList.remove('input__bug');
            });
        };
        if (contact.name === "Other") {
            contact.addEventListener('input', () => {
                document.querySelectorAll('.bug').forEach(bug => { if (bug.textContent.includes("Введи корректные данные")) { bug.remove() } });
                contact.classList.remove('input__bug');
            });
        };
    });
};

function saveContacts() {
    let contacts = [];
    document.querySelectorAll('.contacts__value').forEach(contact => {
        if (contact.value.trim()) {
            if (contact.name === "Phone") {
                const phone = {
                    type: "Телефон",
                    value: contact.value.trim(),
                };
                contacts.push(phone);
            };
            if (contact.name === "Email") {
                const email = {
                    type: "Email",
                    value: contact.value.trim(),
                };
                contacts.push(email);
            };
            if (contact.name === "Facebook") {
                const facebook = {
                    type: "Facebook",
                    value: contact.value.trim(),
                };
                contacts.push(facebook);
            };
            if (contact.name === "Vk") {
                const vk = {
                    type: "Vk",
                    value: contact.value.trim(),
                };
                contacts.push(vk);
            };
            if (contact.name === "Other") {
                const other = {
                    type: "Другое",
                    value: contact.value.trim(),
                };
                contacts.push(other);
            };
        };
    });
    return contacts;
};

// Работа с формой.

function createForm() {
    const { closeBig } = getSvg();
    const modal = document.createElement('article'),
        form = document.createElement('form'),
        titleWrap = document.createElement('div'),
        fullNameWrap = document.createElement('fieldset'),
        formBug = document.createElement('div'),

        formTitle = document.createElement('h2'),
        formId = document.createElement('span'),

        labelSurname = document.createElement('label'),
        labelName = document.createElement('label'),
        labelLastname = document.createElement('label'),
        inputSurname = document.createElement('input'),
        inputName = document.createElement('input'),
        inputLastname = document.createElement('input'),
        spanSurname = document.createElement('span'),
        spanName = document.createElement('span'),
        spanLastname = document.createElement('span'),
        starSurname = document.createElement('span'),
        starName = document.createElement('span'),

        btnClose = document.createElement('button'),
        btnCancel = document.createElement('button'),
        btnSave = document.createElement('button');

    modal.classList.add('window');
    form.classList.add('window__wrap', 'modal__form');
    titleWrap.classList.add('modal__wrap');
    fullNameWrap.classList.add('modal__wrap', 'modal__wrap--fullName');
    formBug.classList.add('modal__wrap', 'modal__bug');
    formTitle.classList.add('title', 'modal__title');
    formId.classList.add('modal__span');
    labelSurname.classList.add('modal__label');
    labelName.classList.add('modal__label');
    labelLastname.classList.add('modal__label');
    inputSurname.classList.add('input', 'modal__input');
    inputName.classList.add('input', 'modal__input');
    inputLastname.classList.add('input', 'modal__input');
    spanSurname.classList.add('modal__span', 'modal__span--fio');
    spanName.classList.add('modal__span', 'modal__span--fio');
    spanLastname.classList.add('modal__span', 'modal__span--fio');
    starSurname.classList.add('star');
    starName.classList.add('star');
    btnClose.classList.add('btn', 'window__close', 'modal__close');
    btnCancel.classList.add('btn', 'window__cancel', 'modal__btn', 'modal__btn--close');
    btnSave.classList.add('btn', 'window__edit', 'modal__btn', 'modal__btn--save');

    btnClose.innerHTML = closeBig;

    modal.id = "modal";
    form.action = "#";
    form.method = "post";
    form.autocomplete;
    inputSurname.name = "Surname";
    inputName.name = "Name";
    inputLastname.name = "Lastname";
    inputSurname.type = "text";
    inputName.type = "text";
    inputLastname.type = "text";
    inputSurname.placeholder = " ";
    inputName.placeholder = " ";
    inputLastname.placeholder = " ";
    btnClose.type = "button";
    btnCancel.type = "button";
    btnSave.type = "submit";

    formTitle.textContent = "Новый клиент";
    formId.textContent = "ID: 123455";
    spanSurname.textContent = "Фамилия";
    spanName.textContent = "Имя";
    spanLastname.textContent = "Отчество";
    starSurname.textContent = "*";
    starName.textContent = "*";
    btnCancel.textContent = "Отмена";
    btnSave.textContent = "Сохранить";

    document.querySelector('.body').prepend(modal);
    modal.append(form);
    form.append(titleWrap, fullNameWrap, formBug, btnSave, btnCancel, btnClose);
    titleWrap.append(formTitle);
    fullNameWrap.append(labelSurname, labelName, labelLastname);
    labelSurname.append(inputSurname, spanSurname);
    labelName.append(inputName, spanName);
    labelLastname.append(inputLastname, spanLastname);
    spanSurname.append(starSurname);
    spanName.append(starName);

    modal.addEventListener('click', e => {
        const notForm = e.composedPath().includes(form);
        if (!notForm) { modal.remove() };
    })
    btnClose.addEventListener('click', closeForm);
    btnCancel.addEventListener('click', closeForm);

    return { modal, form, formBug, formTitle, formId, inputSurname, inputName, inputLastname, btnClose, btnCancel, btnSave };
};

function getFormClient() {
    const btnSave = document.querySelector('.modal__btn--save'),
        btnCancel = document.querySelector('.modal__btn--close'),

        modal = document.getElementById('modal'),
        modalForm = document.querySelector('.modal__form'),
        titleModal = document.querySelector('.modal__title'),
        idModal = document.getElementById('id-modal'),
        surnameModal = document.getElementById('surname-modal'),
        nameModal = document.getElementById('name-modal'),
        lastnameModal = document.getElementById('lastname-modal');

    return { modal, modalForm, titleModal, idModal, surnameModal, nameModal, lastnameModal, btnSave, btnCancel }
};

function searchFullName(surname, name, lastname) {
    if (!isNaN(surname.value.trim())) {
        validation(surname, "Введи корректную Фамилию");
    };
    surname.addEventListener('input', () => {
        document.querySelectorAll('.bug').forEach(bug => { if (bug.textContent.includes("Введи корректную Фамилию")) { bug.remove() } });
        surname.classList.remove('input__bug');
    });

    if (!isNaN(name.value.trim())) {
        validation(name, "Введи корректное Имя");
    };
    name.addEventListener('input', () => {
        document.querySelectorAll('.bug').forEach(bug => { if (bug.textContent.includes("Введи корректное Имя")) { bug.remove() } });
        name.classList.remove('input__bug');
    });

    if (lastname.value.trim()) {
        if (!isNaN(lastname.value.trim())) { validation(lastname, "Введи корректное Отчество") };
    };
    lastname.addEventListener('input', () => {
        document.querySelectorAll('.bug').forEach(bug => { if (bug.textContent.includes("Введи корректное Отчество")) { bug.remove() } });
        lastname.classList.remove('input__bug');
    });

    return { surname, name, lastname };
};

function editName(text) {
    const startName = text.value.trim().substring(0, 1).toUpperCase();
    const endName = text.value.trim().substring(1).toLowerCase();
    const result = startName + endName;
    return result;
};

function validation(element, textBug, classBug = 'input__bug') {
    const bugModal = document.querySelector('.modal__bug'),
        bug = document.createElement('span');

    bugModal.classList.add('modal__bug--contain');
    bug.classList.add('bug');

    if (element === false) {
        document.querySelector('.anima-wrap').classList.add(classBug);
    } else { element.classList.add(classBug) };

    bug.textContent = textBug;

    bugModal.append(bug);
};

function closeForm() {
    document.getElementById('modal').remove();
    document.querySelectorAll('input').innerHTML = "";
};

// Работа с сортировкой.

function getSorting() {
    const { arrow } = getSvg(),
        descrOrder = document.createElement('span'),
        idClientSort = document.getElementById('id-client'),
        fullNameSort = document.getElementById('full-name'),
        dateCreationSort = document.getElementById('date-creation'),
        dateChangeSort = document.getElementById('date-change'),
        idArrowWrap = document.createElement('span'),
        nameArowWrap = document.createElement('span'),
        creationArowWrap = document.createElement('span'),
        changeArrowWrap = document.createElement('span');

    idArrowWrap.classList.add('arrow');
    nameArowWrap.classList.add('arrow');
    creationArowWrap.classList.add('arrow');
    changeArrowWrap.classList.add('arrow');
    descrOrder.classList.add('descr-order');

    descrOrder.textContent = "А-Я";

    idArrowWrap.innerHTML = arrow;
    nameArowWrap.innerHTML = arrow;
    creationArowWrap.innerHTML = arrow;
    changeArrowWrap.innerHTML = arrow;

    idClientSort.append(idArrowWrap);
    fullNameSort.append(nameArowWrap, descrOrder);
    dateCreationSort.append(creationArowWrap);
    dateChangeSort.append(changeArrowWrap);

    return {
        idClientSort, fullNameSort, dateCreationSort, dateChangeSort,
        idArrowWrap, nameArowWrap, creationArowWrap, changeArrowWrap, descrOrder,
    };
};

function paintElementSort(title, titleElement) {
    let changed = document.querySelectorAll('.sort-onclick');
    if (changed.length > 2) {
        changed.forEach(element => {
            element.classList.remove('sort-onclick');
        });
    };

    if (!title.classList.contains('sort-onclick')) {
        title.classList.add('sort-onclick');
        titleElement.classList.add('sort-onclick');
    };
};

function directionArrowSort(arrow) {
    if (directionSort) { arrow.classList.add('sort-rotate') } else { arrow.classList.remove('sort-rotate') };
};

// Работа с отрисовкой.

let elementSort = 'id',
    directionSort = true;

function addRendering(arrayClients) {
    document.querySelectorAll('.table__cell').forEach(obj => obj.remove());

    let copyArrayClients = [...arrayClients];

    copyArrayClients = copyArrayClients.sort(function (a, b) {
        let sort = a[elementSort] < b[elementSort];

        if (directionSort === false) { sort = a[elementSort] > b[elementSort] };
        if (sort) { return -1 };
    });

    copyArrayClients.forEach(obj => { getClient(obj) });

    const { pen, close } = getSvg();
    document.querySelectorAll('.table__edit').forEach(element => { element.innerHTML += pen });
    document.querySelectorAll('.table__delete').forEach(element => { element.innerHTML += close });

    if (arrayClients.length !== 0) {
        document.querySelector('.anima-wrap').classList.add('none');
    };
};

// Отрисовка прогрузок.

function loadingForm() {
    const wrap = document.createElement('div'),
        element = document.createElement('span');

    wrap.classList.add('anima-wrap', 'anima-wrap-form');
    element.classList.add('anima-element');

    wrap.append(element);
    return wrap;
};

function loadingBtnEdit(btn, meaning = false) {
    const { loading, pen, close } = getSvg();

    if (meaning === false) {
        btn.lastChild.remove();
        btn.innerHTML += loading;
        btn.lastChild.classList.add('btn-loading');
    } else if (meaning === true) {
        btn.lastChild.remove();
        btn.innerHTML += pen;
    } else {
        btn.lastChild.remove();
        btn.innerHTML += close;
    }
};

// Основное подключение к странице.

document.addEventListener('DOMContentLoaded', async function workingField() {
    clientsList = await getListClients();

    if (window.location.hash !== '') {
        const getId = window.location.hash.slice(1);
        await completeClientChange(getId);
    };

    let { idClientSort, fullNameSort, dateCreationSort, dateChangeSort,
        idArrowWrap, nameArowWrap, creationArowWrap, changeArrowWrap, descrOrder, } = getSorting();

    paintElementSort(idClientSort, idArrowWrap);

    idClientSort.addEventListener('click', () => {
        elementSort = 'id';
        directionSort = !directionSort;
        directionArrowSort(idArrowWrap);
        paintElementSort(idClientSort, idArrowWrap);
        addRendering(clientsList);
    });
    fullNameSort.addEventListener('click', () => {
        elementSort = 'fullName';
        directionSort = !directionSort;
        if (directionSort === false) { descrOrder.textContent = "Я-А" } else { descrOrder.textContent = "А-Я" };
        directionArrowSort(nameArowWrap);
        paintElementSort(fullNameSort, nameArowWrap);
        addRendering(clientsList);
    });
    dateCreationSort.addEventListener('click', () => {
        elementSort = 'createdAt';
        directionSort = !directionSort;
        directionArrowSort(creationArowWrap);
        paintElementSort(dateCreationSort, creationArowWrap);
        addRendering(clientsList);
    });
    dateChangeSort.addEventListener('click', () => {
        elementSort = 'updatedAt';
        directionSort = !directionSort;
        directionArrowSort(changeArrowWrap);
        paintElementSort(dateChangeSort, changeArrowWrap);
        addRendering(clientsList);
    });

    const searchQuery = document.getElementById('header-input');
    searchQuery.addEventListener('input', (e) => {
        e.preventDefault();

        document.querySelectorAll('.table__cell').forEach(cell => cell.remove());
        document.querySelector('.anima-wrap').classList.remove('none');

        setTimeout(async () => {
            clientsList = await getListClients("search", searchQuery.value);
        }, 300)
    });

    document.getElementById('add-client').addEventListener('click', () => {
        const { form, formTitle, btnCancel, inputSurname, inputName, inputLastname } = createForm();

        formTitle.textContent = "Новый клиент";
        btnCancel.textContent = "Отмена";

        blockContacts();

        form.addEventListener('submit', async e => {
            e.preventDefault();

            document.querySelectorAll('.bug').forEach(bug => { bug.remove() });

            const { surname, name, lastname } = searchFullName(inputSurname, inputName, inputLastname);

            checkContactsBug();

            if (document.querySelectorAll('.bug').length > 0) { return };

            await createClient(surname, name, lastname, saveContacts())
        });
    });
});