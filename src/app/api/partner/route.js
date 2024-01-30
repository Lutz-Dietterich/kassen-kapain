import Partner from "../../models/Partner";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const partnerList = await Partner.find({}).lean();
    return NextResponse.json({ partnerList });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const partnerData = body;
    await Partner.create(partnerData);

    return NextResponse.json(
      { data: partnerData, message: "Partner Created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
