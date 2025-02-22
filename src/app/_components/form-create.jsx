"use client";

import { useActionState } from "react";

import { createActivityAction } from "../_Action/action-create";

export const FormCreate = () => {
    const [state, formAction, pending] = useActionState(createActivityAction, null)
    return (
    <form className="space-y-2" action={formAction}>
      <section>
        <h2 className="text-lg font-bold text-zinc-600">BANK SYARIAH CABANG TMUR TENGAH</h2>
        <h3 className="text-lg font-bold">Add New Transaction</h3>
        <p>Input Your Activity And Amount</p>
      </section>
      <input name="title" placeholder="input the title"/>
      <input name="amount" type="number" placeholder="input the amount" />
      <select name="category">
        <option value="credit">CREDIT</option>
        <option value="debit">DEBIT</option>
      </select>
      <button disabled={pending}>{pending ? "Saving..." : "Save"}</button>
    </form>
  );
};
