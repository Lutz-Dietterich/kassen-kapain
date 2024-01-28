import Partner from "@/app/models/Partner";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const partnerData = body;
    await Partner.create(partnerData);

    return NextResponse.json(
      { data: transactionData, message: "Partner Created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
