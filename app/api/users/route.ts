import { NextResponse } from "next/server";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// Handle GET request to fetch the list of users
export async function GET() {
  console.log("GET");
  return NextResponse.json(users);
}

// Handle POST request to add a new user
export async function POST(request: Request) {
  const newUser = await request.json();
  newUser.id = users.length + 1;
  users.push(newUser);
  return NextResponse.json(
    { message: "User added", user: newUser },
    { status: 201 },
  );
}
