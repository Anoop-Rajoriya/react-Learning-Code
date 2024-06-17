import { useState } from "react";

export function useFilter(data, callback) {
  const [query, setQuery] = useState("");

  const filterData = data.filter((val) => {
    return callback(val).toLowerCase().includes(query);
  });

  return [filterData, setQuery];
}
