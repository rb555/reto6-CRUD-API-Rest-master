import Review from '../models/review.model.js';

export const getReviews = async (req,res) => {
    const reviews = await Review.find()
    res.json(reviews)
};

export const createReview = async (req,res) => {
    const {restaurantName, description, review,date} = req.body
    const newReview = new Review({
        restaurantName,
        description,
        review,
        date,
        user: req.user.id
    })
    const savedReview = await newReview.save();
    res.json(savedReview);
};

export const getReview = async (req,res) => {
    const review = await Review.findById(req.params.id)
    if (!Review) return res.status(404).json({message:'Not found'})
    return res.sendStatus(204);
};

export const updateReview = async (req,res) => {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {new: true})
};

export const deleteReview = async (req,res) => {
    await Review.findByIdAndDelete(req.params.id)
    if (!Review) return res.status(404).json
    res.json(Review)
};