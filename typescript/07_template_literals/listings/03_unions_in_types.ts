type PropEventSource<T> = {
    on(eventName: `${string & keyof T}Changed`, callback: () => void): void;
};

declare function makeWatchedObject<T>(obj: T): T & PropEventSource<T>;

let person = makeWatchedObject({
    firstName: "David",
});

// error!
//person.on("firstName", () => {
//});

// error!
//person.on("frstNameChanged", () => {
//});

// success!
person.on("firstNameChanged", () => {
    console.log(`firstName was changed!`);
});
