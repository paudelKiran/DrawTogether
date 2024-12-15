"use client";
import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  useRef,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { socket } from "../lib/socket";
import { UserType,Tool } from "@/types/declaration";

// Define the structure for the user object

// Define the context type


type MyContextType = {
  user: UserType[];
  setUser: Dispatch<React.SetStateAction<UserType[]>>;
  isJoined: boolean;
  setIsJoined: Dispatch<SetStateAction<boolean>>;
  uuidv4: () => string;
  socket: any;
  roomUsers: any;
  setRoomUsers: Dispatch<React.SetStateAction<UserType[]>>;
  strokeWidth: number;
  setStrokeWidth: Dispatch<SetStateAction<number>>;
  noUsers: number;
  setNoUsers: Dispatch<SetStateAction<number>>;
  canvasRef: any;
  ctx: any;
  tool: Tool;
  setTool: Dispatch<SetStateAction<Tool>>; // Updated here to accept only Tool values
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
  element: Array<any>;
  setElement: Dispatch<SetStateAction<Array<any>>>;
};

// Provide a non-null initial value
const BoardContext = createContext<MyContextType>({
  user: [],
  isJoined: false,
  uuidv4,
  socket,
  roomUsers: [],
  noUsers: 0,
  strokeWidth: 1,
  setStrokeWidth: () => {},
  setNoUsers: () => {},
  setRoomUsers: () => {},
  setIsJoined: () => {},
  setUser: () => {},
  canvasRef: null,
  ctx: null,
  tool: "pencil", // Default value is "pencil"
  color: "black",
  element: [],
  setTool: () => {}, // Initial function placeholder
  setColor: () => {},
  setElement: () => {},
});

export const BoardProvider = ({ children }: { children: React.ReactNode }) => {
  const [isJoined, setIsJoined] = useState(false);
  const [user, setUser] = useState<UserType[]>([]);
  const [roomUsers, setRoomUsers] = useState<any>([]);
  const [noUsers, setNoUsers] = useState(0);
  const [strokeWidth, setStrokeWidth] = useState(1);
  //canvas related
  let canvasRef = useRef<HTMLCanvasElement>(null);
  let ctx = useRef(null);
  const [tool, setTool] = useState<Tool>("pencil"); // Corrected here: `Tool` type
  const [color, setColor] = useState("#000000");
  const [element, setElement] = useState<any>([]);

  return (
    <BoardContext.Provider
      value={{
        user,
        isJoined,
        uuidv4,
        socket,
        setIsJoined,
        setUser,
        roomUsers,
        setRoomUsers,
        noUsers,
        setNoUsers,
        canvasRef,
        ctx,
        tool,
        setTool, // Corrected: setTool will only accept `Tool` values
        color,
        setColor,
        element,
        setElement,
        strokeWidth,
        setStrokeWidth,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = () => {
  const context = useContext(BoardContext);

  if (!context) {
    throw new Error("useBoardContext must be used within a BoardProvider");
  }

  return context;
};
