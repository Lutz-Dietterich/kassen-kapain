import Category from "../../../models/Category";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categoryList = await Category.find({}).lean();
    return NextResponse.json({ categoryList });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const categoryData = body;
    await Category.create(categoryData);

    return NextResponse.json(
      { data: categoryData, message: "Category Created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
