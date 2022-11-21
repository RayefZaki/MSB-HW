import expres from "express";
import validate from "../middleWare/validate";
import { BankSchema, BankType } from "../zod-schema/BankSchema";

export const BankRouter = expres();

let Bankmanag: BankType[] = [];
Bankmanag.push({
  id: "001",
  username: "Rayef",
  Password: "Abcd123!",
  balance: 100000,

});


BankRouter.get(`/`, (req, res) => {
  return res.json(Bankmanag);
});

BankRouter.post(`/`, validate(BankSchema), (req, res) => {
  const newRide = req.body as BankType;
  Bankmanag.push(newRide);

  return res.json({
    message: "successfully !",
  });
});


BankRouter.put(`/wirtdraw/:id/:amount`, (req: any, res) => {
    const id = req.params.id;
    const amount = req.params. amount;
    Bankmanag.map((draw) => {
    if (draw.id === id) {
    if (draw.balance >= amount) {
    draw.balance = draw.balance - amount;
    return res.json({
    message:
    `completed procces and your new balnce is ${draw.balance}`,
    });
    } else {
    return res.json({
    message: "you don't have enugh funds" });}
}
})
  })

  BankRouter.put(`/deposits/:id/:amount`, (req: any, res) => {
    const id = req.params.id;
    const amount = req.params. amount;
    Bankmanag.map((deposits) => {
    if (deposits.id == id) {
        deposits.balance = deposits.balance + amount;

{
    return res.json({
    message: `completed procces and your new balnce is ${deposits.balance}` });}
}
})
  })


BankRouter.put(`/:id`, validate(BankSchema), (req, res) => {
  const { id } = req.params;
  const updateObj = req.body as BankType;
  Bankmanag.map((update) => {
    if (update.id === id || update.username === id) {
      update.id = updateObj.id;
      update.username = updateObj.username;
      update.Password = updateObj.Password;
      update.balance = updateObj.balance;
    }
  });

  return res.json({
    message: "item updated !",
  });
});

BankRouter.delete(`/:id`, (req, res) => {
  const { id } = req.params;
  const newRideArr = Bankmanag.filter((del) => {
    return del.id !== id ;
  });

  Bankmanag = newRideArr;

  return res.json({
    message: "item deleted !",
  });
});