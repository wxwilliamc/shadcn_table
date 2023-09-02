"use client"

import { ColumnDef } from "@tanstack/react-table"
import { User } from "../userData"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns: ColumnDef<User>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox 
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox 
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: 'id',
        header: 'User ID',
    },
    {
        accessorKey: 'first_name',
        header: "First Name"
    },
    {
        accessorKey: 'last_name',
        header: 'Last Name'
    },
    {
        accessorKey: 'gender',
        header: 'Gender'
    },
    {
        accessorKey: 'email',
        header: ({ column }) => {
            return (
                // Email Sorting
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email

                    <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        }
    },
    {
        accessorKey: 'createdAT',
        header: ({ column }) => {
            return (
                // Date Sorting
                <Button 
                    variant='ghost'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Date Created

                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        // Format Date 
        cell: ({ row }) => {
            const dateCreated = row.getValue("createdAT")
            const formatted = new Date(dateCreated as string).toLocaleDateString();

            return (
                <>
                    <div className="font-medium">{formatted}</div>
                </>
            )
        }
    },
    {
        // Action (Copy User Email)
        id: 'actions',
        cell: ({ row }) => {
            const user = row.original
            const userEmail = user.email
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuLabel>
                            Actions
                        </DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(userEmail.toString())}>
                            Copy User Email
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
        enableSorting: false,
        enableHiding: false,
    }
]