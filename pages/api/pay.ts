import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const time = Math.random() * 1000;
  let code = Math.random();
  return new Promise(() =>
    setTimeout(() => {
      try {
        if (Math.round(code) === 1) {
          throw new Error("Error");
        }
        res.status(200).json({ message: "Успешно оплачено!" });
      } catch (err) {
        res.status(500).send({ error: (err as Error).message });
      }
    }, time)
  );
}

export default handler;
