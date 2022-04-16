import { faker } from "@faker-js/faker";

// status 0 draft; 1 pending;  2 paid
const invoices = [{
        _id: "RTX3080",
        price: 1800.9,
        due: "19 Jan 2022",
        buyer: "Connor Zhu",
        status: "Paid",
    },
    {
        _id: "RTX3090TI",
        price: 2100,
        due: "2 Feb 2022",
        buyer: "Darren Ye",
        status: "Pending",
    },
    {
        _id: "6700XT",
        price: 799.99,
        due: "2 Feb 2022",
        buyer: "Connor Zhu",
        status: "Draft",
    },
    {
        _id: "5700XT",
        price: 599.99,
        due: "19 Aug 2021",
        buyer: "Darren Ye",
        status: "Paid",
    },
];

export const fakerData = () => {
    let data = [];
    for (let i = 0; i < 10; i++) {
        let status = "";
        let random = faker.datatype.number({ min: 0, max: 2 });
        if (random === 0) {
            status = "Draft";
        }
        if (random === 1) {
            status = "Pending";
        }
        if (random === 2) {
            status = "Paid";
        }
        const userName = faker.name.firstName() + " " + faker.name.lastName();
        const email = userName + "@" + faker.internet.domainName();
        const createdAt = faker.date.past(2);
        const lastActive = faker.date.between(createdAt, faker.date.recent());
        const lastSeen = faker.date.between(createdAt, new Date());
        let single = {
            _uuid: faker.datatype.uuid(),
            _id: faker.random.alpha({ count: 3, upcase: true }) +
                faker.datatype.number(4),
            price: faker.datatype.float({ min: 10, max: 1000, precision: 0.01 }),
            due: createdAt,
            buyer: userName,
            status,
            bill_from_street: faker.address.streetAddress(),
            bill_from_city: faker.address.city(),
            bill_from_postCode: faker.address.zipCode(),
            bill_from_country: faker.address.country(),
            bill_to_street: faker.address.streetAddress(),
            bill_to_city: faker.address.city(),
            bill_to_postCode: faker.address.zipCode(),
            bill_to_country: faker.address.country(),
            name: userName,
            email: email,
            invoice_date: lastActive,
            payment_terms: status,
            project_description: faker.lorem.sentence(),
            products: [{
                    item_name: faker.animal.fish(),
                    item_price: faker.datatype.float({
                        min: 10,
                        max: 1000,
                        precision: 0.01,
                    }),
                    item_qty: faker.datatype.number(10),
                },
                {
                    item_name: faker.animal.fish(),
                    item_price: faker.datatype.float({
                        min: 10,
                        max: 1000,
                        precision: 0.01,
                    }),
                    item_qty: faker.datatype.number({ min: 1, max: 10 }),
                },
            ],
        };
        data.push(single);
    }
    return data;
};

export default invoices;