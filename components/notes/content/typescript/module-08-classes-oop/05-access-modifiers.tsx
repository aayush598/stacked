import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { CodeTabs } from "./shared/visuals";

export function AccessModifiersNote() {
  return (
    <div>
      <NoteLead>Access modifiers control visibility: public (default, accessible everywhere), private (class only), protected (class + subclasses), and readonly (no reassignment).</NoteLead>
      <CodeTabs items={[
        { label: "public", code: `class Api {
  public url: string; // default, explicit for clarity
  constructor(url: string) { this.url = url; }
}
new Api("/api").url; // OK`, note: "public is the default — accessible from anywhere." },
        { label: "private", code: `class Wallet {
  private balance: number = 0;
  deposit(amount: number) { this.balance += amount; }
  getBalance() { return this.balance; }
}
const w = new Wallet();
// w.balance; // Error: private`, note: "private restricts access to the declaring class only." },
        { label: "protected", code: `class Animal {
  protected sound: string = "...";
}
class Dog extends Animal {
  speak() { return this.sound; } // OK
}
// new Animal().sound; // Error`, note: "protected allows access in the class and its subclasses." },
        { label: "readonly", code: `class Token {
  readonly value: string;
  constructor(v: string) { this.value = v; }
}`, note: "readonly is not about visibility — it prevents reassignment." },
      ]} />
      <NoteTakeaways items={["public = everywhere, private = class only, protected = class + subclasses.", "Use private/protected to hide implementation details.", "readonly prevents mutation, not access."]} />
    </div>
  );
}
