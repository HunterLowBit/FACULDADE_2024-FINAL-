import { userSchema } from "../models/User";

const getAll = async (req, res) => {
    const users = await userSchema.find();
    res.status(200).json(users);
};
const getById = async (req, res) => {
    const { id } = req.params;
    const user = await userSchema.findById(id);
    res.status(200).json(user);
};
const create = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await userSchema.create({ name, email, password });
    res.status(201).json(user);
};
const update = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const user = await userSchema.findByIdAndUpdate(id, { name, email, password });
    res.status(200).json(user);
};
const remove = async (req, res) => {
    const { id } = req.params;  
    const user = await userSchema.findByIdAndDelete(id);
    res.status(200).json(user);
};
export { getAll, getById, create, update, remove };