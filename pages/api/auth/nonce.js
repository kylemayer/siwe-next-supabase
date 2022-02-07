import supabase from "../../../services/supabase.js";

// POST /api/auth/nonce

const nonceApi = async (req, res) => {
    const { walletAddr } = req.body;

    if (error) {
        res.status(400).json({ error: error.message });
    } else {
        res.status(200).json({ nonce: nonce });
    }
}

export default nonceApi;