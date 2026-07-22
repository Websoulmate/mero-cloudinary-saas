import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";
// import { PrismaClient } from "@prisma/client/extension";

// const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const videos = await prisma.video.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(videos);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Error fetching videos" },
      { status: 500 },
    );
  }
}
