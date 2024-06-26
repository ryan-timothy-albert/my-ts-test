<!-- Start SDK Example Usage [usage] -->
```typescript
import { RyTs } from "ryantypescript";

const ryTs = new RyTs({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await ryTs.pet.updatePet({
        id: 10,
        name: "doggie",
        category: {
            id: 1,
            name: "Dogs",
        },
        photoUrls: ["<value>"],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->