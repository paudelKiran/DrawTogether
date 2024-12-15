import { RefObject } from "react";

export type dataToCanvas={  
    canvasRef:RefObject<HTMLCanvasElement>;
    ctx:any;
    color:string;
    tool:string;
    element: any;
    setElement:Function;
    strokeWidth:number;
    canvasDivRef:RefObject<HTMLDivElement>;
}

export type UserType = {
  roomId: string;
  userId: string;
  userName: string;
  host: boolean;
  meetingTitle?: string;
  presenter: boolean;
};

export type Tool = "pencil" | "line" | "rectangle";