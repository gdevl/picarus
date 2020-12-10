import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  post__container: {
    backgroundColor: "#222",
    color: "#fff",
    maxWidth: 345,
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  media: {
    height: 0,
    // height: "100%",
    paddingTop: "100%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Post = ({ post }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  // const users = useSelector(() => state.)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // const content = posts.postIds[1].content;
  // const caption = posts.postIds[1].content;

  return (
    <Card className={classes.post__container}>
      {console.log("post")}
      {console.log(post.id)}
      <CardHeader />
      <CardMedia
        className={classes.media}
        image={post.imageUrl}
        title="Image Title"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          align="left"
        >
          {post.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Comments:</Typography>
          <Typography paragraph>Post Comment 1</Typography>
          <Typography paragraph>Post Comment 2</Typography>
          <Typography paragraph>Post Comment 3</Typography>
          <Typography paragraph>Post Comment 4</Typography>
          <Typography paragraph>Post Comment 4</Typography>
          <Typography paragraph>Post Comment 4</Typography>
          <Typography paragraph>Post Comment 4</Typography>
          <Typography paragraph>Post Comment 4</Typography>
          <Typography paragraph>Post Comment 4</Typography>
          <Typography paragraph>Post Comment 4</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Post;
