// We have a union of two event types. Create a function `handleEvent` that takes an event and logs it differently depending on its type. Use **discriminated unions** and `Omit` to type the function correctly.

type ClickEvent = { 
    type: "click"; 
    x: number; 
    y: number };
    
type KeyEvent = { 
    type: "key";
    key: string
    };

type MyEvent = ClickEvent | KeyEvent;

function handleEvent(event: MyEvent) {
  if (event.type === "click") {
    const {x, y}: Omit<ClickEvent, "type"> = event;
    console.log("Click at", x, y);
  } else {
    const {key}: Omit<KeyEvent, "type"> = event
    console.log("Key pressed:", key);
  }
}

const toListen:KeyEvent = {
    type: "key",
    key: "Event listened by key type"
}
handleEvent(toListen);
