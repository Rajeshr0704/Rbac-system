const Role = require('../models/role')
exports.createRole = async (req, res) =>{
    try {
        const {name, permissions} = req.body;
        const newRole = new Role({name, permissions });
        await newRole.save();

        res.status(201).json({message:'Role created successfully',newRole});

    } catch (error) {
        console.error(error);
        res.status(500).json({message:'server error'});
    }
};

exports.getRole = async (req, res) =>{
    
    try {
        const roles = await Role.find();

        res.status(200).json(roles);
    } catch (error) {
        consloe.error(error);
        res.status(500).json({message:'server error'});
    }
};

exports.deleteRole = async (req, res) =>{
    try {
        const {id } = req.params;
        
        await Role.findByAndDelete(id);
        res.status(200).json({message:'Role deleted successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'server error'});
    }
};

const assignRole = async (req, res) => {
    try {
        const { userId, roleName } = req.body;

        // Validate input
        if (!userId || !roleName) {
            return res.status(400).json({ message: "User ID and role name are required" });
        }

        // Check if role exists
        const role = await Role.findOne({ name: roleName });
        if (!role) {
            return res.status(404).json({ message: "Role not found" });
        }

        // Find the user and update their role
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.role = roleName; // Assign the role
        await user.save();

        res.status(200).json({
            message: "Role assigned successfully",
            user: {
                id: user._id,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        console.error("Error assigning role:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
module.exports = { assignRole };
