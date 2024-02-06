import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

// type CardProps = React.ComponentProps<typeof Card>;
type CustomCardProps = React.ComponentProps<typeof Card> & {
  cardHeader?: React.ReactNode;
  cardContent?: React.ReactNode;
  cardFooter?: React.ReactNode;
};

const CustomCard: React.FC<CustomCardProps> = ({
  className,
  cardHeader,
  cardContent,
  cardFooter,
  ...props
}) => {
  return (
    <Card className={className} {...props}>
      <CardHeader>{cardHeader}</CardHeader>
      <CardContent
        className="grid
        gap-4
      "
      >
        {cardContent}
      </CardContent>
      <CardFooter>{cardFooter}</CardFooter>
    </Card>
  );
};

export default CustomCard;
