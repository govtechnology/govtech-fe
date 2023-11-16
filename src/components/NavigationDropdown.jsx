import PropTypes from "prop-types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./cnc/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./cnc/ui/avatar";
import { useDispatch } from "@/redux/store";
import { logOut } from "@/redux/authSlices";
import { useNavigate } from "react-router-dom";

export function NavigationDropdown({ name, email }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Pengaturan akun</DropdownMenuItem>
          <DropdownMenuItem
            onClick={async () => {
              dispatch(logOut());
              navigate("/");
              window.location.href = "/";
            }}
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

NavigationDropdown.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
};
