interface Body {
  phone: string;
  sum: string;
  id: string;
}

export const useSubmit = () => (body: Body) => {
  return fetch("/api/pay", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.json();
  });
};
