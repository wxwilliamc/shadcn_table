import xlsx, { IJsonSheet } from "json-as-xlsx"
import { userData } from "@/app/userData"

export const exportToExcel = () => {
    let columns:IJsonSheet[] = [
        {
            sheet: "Users",
            columns: [
                {
                    label: "User ID",
                    value: 'id'
                },
                {
                    label: "First Name",
                    value: 'first_name'
                },
                {
                    label: "Last Name",
                    value: 'last_name'
                },
                {
                    label: "Email",
                    value: 'email'
                },
                {
                    label: "Gender",
                    value: 'gender'
                },
                {
                    label: "Date Created ",
                    value: (row) => new Date(row.createdAT).toLocaleDateString(),
                },
            ],
            content: userData
        }
    ]

    let settings = {
        fileName: "User Registration Details"
    };

    xlsx(columns, settings)
}