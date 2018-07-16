import { testQueris } from './testQueris';

export const testController = async (req, res) => {
  try {
    const data = await testQueris(req.body);
    res.send(data);
  } catch (err) {
    console.log('testController - error= ', err);
    res.status(404).send(err);
  }
};
