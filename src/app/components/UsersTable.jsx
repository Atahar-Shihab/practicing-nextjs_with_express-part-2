import React from 'react';
import { Button, Table } from "@heroui/react";
import Link from 'next/link';
const UsersTable = ({ users }) => {
    return (

        <Table>
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-[600px]">
                    <Table.Header>
                        <Table.Column isRowHeader>Name</Table.Column>
                        <Table.Column>Role</Table.Column>
                        <Table.Column>Status</Table.Column>
                        <Table.Column>Email</Table.Column>
                        <Table.Column>Actions</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            users.map((user, index) => (
                                <Table.Row key={index}>
                                    <Table.Cell>{user.name}</Table.Cell>
                                    <Table.Cell>{user.role}</Table.Cell>
                                    <Table.Cell>{user.status ? 'Active' : 'Inactive'}</Table.Cell>
                                    <Table.Cell>{user.email}</Table.Cell>
                                    <Table.Cell className="flex gap-2">
                                        <Link href={`/users/${user.id}`}>
                                            <Button variant="primary">View</Button>
                                        </Link>
                                        <Link href={`/users/${user.id}/edit`}>
                                            <Button variant="outline">Edit</Button>
                                        </Link>
                                        <Link href={`/users/${user.id}/delete`}>
                                            <Button  variant="danger-soft"
                                            className="hover:bg-red-600 hover:text-white" >Delete</Button>
                                        </Link>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        }

                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
};

export default UsersTable;