import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import '../pages/style.css'
export default function ActionAreaCard(item) {
  return (
    <Card sx={{ maxWidth: 345 }} className='maincard'  >
      <CardActionArea  >
        <CardContent className="ca"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={item.item.url}
            style={{ width: "100px", maxHeight: "280px", padding: "30px" }}
          />

          <Typography gutterBottom variant="h6" sx={{ textAlign: "center" }}>
            {item.item.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center", my: 1 }}
          >
            {item.item.course}
          </Typography>
          <Box sx={{ my: 1 }}>
           

            {[1, 2, 3, 4, 5].map((i) => {
              return Math.ceil(item.item.star) >= i ? (
                <GradeIcon />
              ) : (
                <StarBorderIcon />
              );
            })}
          </Box>
          <Typography gutterBottom variant="subtitle2">
            PRICE: ${item.item.fee}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
