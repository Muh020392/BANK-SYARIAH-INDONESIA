"use client";

import { useActionState } from "react";

import { createActivityAction } from "../_Action/action-create";

import { Button, Input, Select, SelectItem } from "@heroui/react";

export const FormCreate = () => {
    const [state, formAction, pending] = useActionState(createActivityAction, null)
    return (
    <form className="space-y-2" action={formAction}>
      <section>
        <h3 className="text-lg font-bold">Add New Transaction</h3>
        <p>Input Your Activity And Amount</p>
      </section>
      <Input variant="bordered" name="title" placeholder="input the title"/>
      <Input variant="bordered" name="amount" type="number" placeholder="input the amount" />
      <Select variant="bordered" name="category">
       <SelectItem key="credit">CREDIT</SelectItem>
       <SelectItem key="debit">DEBIT</SelectItem>
      </Select>
     <Button type="submit" color="primary" isLoading={pending}>Save</Button>
    </form>
  );
};
