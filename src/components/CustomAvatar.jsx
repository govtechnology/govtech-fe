import PropTypes from "prop-types";
import { forwardRef } from "react";
import { useTheme } from "@mui/material/styles";
import { Badge, Avatar } from "@mui/material";

const getCharAtName = (name) => name && name.charAt(0).toUpperCase();

const CustomAvatar = forwardRef(
  ({ color, name = "", BadgeProps, children, sx, ...other }, ref) => {
    const theme = useTheme();
    const charAtName = getCharAtName(name);
    const colr = color;
    const renderContent =
      colr === "default" ? (
        <Avatar ref={ref} sx={sx} {...other}>
          {name && charAtName}
          {children}
        </Avatar>
      ) : (
        <Avatar
          ref={ref}
          sx={{
            color: theme.palette[colr]?.contrastText,
            backgroundColor: "#000000",
            fontWeight: theme.typography.fontWeightMedium,
            ...sx,
          }}
          {...other}
        >
          {name && charAtName}
          {children}
        </Avatar>
      );
    return BadgeProps ? (
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        {...BadgeProps}
      >
        {renderContent}
      </Badge>
    ) : (
      renderContent
    );
  }
);

CustomAvatar.propTypes = {
  sx: PropTypes.object,
  name: PropTypes.string,
  children: PropTypes.node,
  BadgeProps: PropTypes.object,
  color: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
  ]),
};

export default CustomAvatar;
