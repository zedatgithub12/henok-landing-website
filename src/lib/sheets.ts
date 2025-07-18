export async function fetchSheetData(sheetName: string) {
  const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vQy7KNuiYkp0scSY_nC2JRqRWZV8-GEZ2-PJ1WLHbkU44VpMkEDUvObbOKfUcEP3awUMf-Nj8xpdIxF/pub?output=csv&gid=${sheetName}`;

  const res = await fetch(url);

  const text = await res.text();

  const rows = text
    .trim()
    .split("\n")
    .map((row) => row.split(","));

  const [headers, ...data] = rows;

  return data.map((row) =>
    headers.reduce((obj, key, i) => {
      obj[key.trim()] = row[i]?.trim() || "";
      return obj;
    }, {} as Record<string, string>)
  );
}
