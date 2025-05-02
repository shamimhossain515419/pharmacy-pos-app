import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export const createUser = async () => {
  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const doc = new GoogleSpreadsheet(
    "1aBS7ret2-g3KnxQJGpThghl-gkNOFYd9umLy5vDsr1Q",
    serviceAccountAuth
  );

  await doc.loadInfo();

  // Try to get the existing sheet by title
  let sheet = doc.sheetsByTitle["New Sheet"];

  // If the sheet doesn't exist, create it
  if (!sheet) {
    sheet = await doc.addSheet({
      title: "New Sheet",
      headerValues: ["Name", "Email", "Age", "Address"],
    });
  }

  // Add a row
  const res = await sheet.addRow({
    Name: "John Doe",
    Email: "john@example.com",
    Age: 28,
    Address: "123 Main Street",
  });
  console.log(res, "res");
};
// get all user  info

export const getAllUserInfo = async (req, res) => {
  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(
      "1aBS7ret2-g3KnxQJGpThghl-gkNOFYd9umLy5vDsr1Q",
      serviceAccountAuth
    );

    await doc.loadInfo();

    const sheet = doc.sheetsByTitle["New Sheet"];
    if (!sheet) return res.status(404).json({ error: "Sheet not found" });

    const rows = await sheet.getRows();
    console.log(rows, "rows");
    const users = rows.map((row) => ({
      name: row.Name,
      email: row.Email,
      age: row.Age,
      address: row.Address,
    }));

    return users;
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
