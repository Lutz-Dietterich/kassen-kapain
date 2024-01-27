import Transaction from "../../models/Transaction";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const transactionData = body;
    await Transaction.create(transactionData);

    return NextResponse.json(
      { data: transactionData, message: "Transaction Created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
