import expres from "express";
import validate from "../middleWare/validate";
import { movieSchema, movieType } from "../zod-schema/movieSchema";

export const movieRatingRouter = expres();

let movieRating: movieType[] = [];
movieRating.push({
  id: "001",
  name: "Rayef",
  genre: "Comedy",
  rating: 4,
  duration: 125,
});

  movieRatingRouter.get('/:name',(req,res)=>{
    const {name}=req.params;
    let z = name.toLowerCase() || name.toLowerCase() 
    movieRating.filter((search)=>{
    return  search.name.toLowerCase()===z || search.name.toUpperCase()===z? res.json(search) : "Not Found"
    })
   })

movieRatingRouter.get(`/`, (req, res) => {
  return res.json(movieRating);
});

movieRatingRouter.post(`/`, validate(movieSchema), (req, res) => {
  const newRide = req.body as movieType;
  movieRating.push(newRide);

  return res.json({
    message: "successfully !",
  });
});

movieRatingRouter.put(`/:id`, validate(movieSchema), (req, res) => {
  const { id } = req.params;
  const updateObj = req.body as movieType;
  movieRating.map((upd) => {
    if (upd.id === id || upd.name === id) {
      upd.id = updateObj.id;
      upd.name = updateObj.name;
      upd.genre = updateObj.genre;
      upd.rating = updateObj.rating;
      upd.duration = updateObj.duration;
    }
  });

  return res.json({
    message: "item updated !",
  });
});

movieRatingRouter.delete(`/:id`, (req, res) => {
  const { id } = req.params;
  const newRideArr = movieRating.filter((del) => {
    return del.id !== id ;
  });

  movieRating = newRideArr;

  return res.json({
    message: "item deleted !",
  });
});