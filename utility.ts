interface Person extends Record<string, unknown>{// This means all properties will be strings and all values unknown
    name: string;
    location: string;
    other: unknown;
}

const person: Omit<Person, "location"> = {
    name: "Yves",
    other: 25,
}