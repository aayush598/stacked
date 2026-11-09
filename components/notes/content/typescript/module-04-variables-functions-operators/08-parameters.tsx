import { NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { ToggleTabs } from "./shared/m04-visuals";
export function ParametersNote(){
  return <div>
    <NoteLead>Parameters define the inputs a function accepts. TypeScript checks argument count and argument types at call sites.</NoteLead>
    <ToggleTabs items={[
      {label:"Typed params",code:`function area(width: number, height: number): number {\n  return width * height;\n}\narea(10, 5);`,note:"Each parameter gets a clear contract."},
      {label:"Object param",code:`function createUser(input: { id: number; name: string }) {\n  return input;\n}`,note:"Object parameters scale well for many named inputs."},
      {label:"Destructuring",code:`function rename({ id, name }: { id: number; name: string }) {\n  return id + ":" + name;\n}`,note:"Type the destructured shape once."},
    ]} />
    <NoteTakeaways items={["Parameter types protect function inputs.", "Object parameters improve readability for multiple arguments.", "TypeScript validates call-site arguments."]} />
  </div>;
}