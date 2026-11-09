import { NoteCode, NoteLead, NoteTakeaways } from "@/components/notes/note-blocks";
import { ComparePanel } from "./shared/visuals";

export function CovarianceContravarianceNote() {
  return (
    <div>
      <NoteLead>Covariance preserves direction (output). Contravariance reverses direction (input). This is most visible in function types.</NoteLead>
      <ComparePanel
        left={{ title: "Covariant output", code: `type Producer<T> = () => T;
// Producer<Dog> assignable to
// Producer<Animal> in safe contexts` }}
        right={{ title: "Contravariant input", code: `type Consumer<T> = (v: T) => void;
// Consumer<Animal> can be used
// where Consumer<Dog> is expected` }}
      />
      <NoteTakeaways items={["Return/output positions are covariant.", "Parameter/input positions are contravariant with strictFunctionTypes.", "Understanding variance explains many assignability errors."]} />
    </div>
  );
}
