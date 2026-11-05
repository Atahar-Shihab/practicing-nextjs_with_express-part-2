'use client';

import React from 'react';
import { Button, Table } from "@heroui/react";
import Link from 'next/link';
import { AlertDialog } from "@heroui/react";

const UsersTable = ({ users, deleteUserAction }) => {

    const handleDelete = async (userId) => {

      await deleteUserAction(userId);

    };

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
                                        <Link href={`/users/${user._id}`}>
                                            <Button variant="primary">View</Button>
                                        </Link>
                                        <Link href={`/users/${user._id}/edit`}>
                                            <Button variant="outline">Edit</Button>
                                        </Link>
                                        {/* <Link href={`/users/${user._id}/delete`}> */}
                                           <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete user permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{user.name}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={() => handleDelete(user._id)} slot="close" variant="danger">
                Confirm Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
                                        {/* </Link> */}
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