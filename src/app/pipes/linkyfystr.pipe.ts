import { Pipe } from "@angular/core";
import linkyfystr from "linkifyjs/string";

@Pipe({
    name: 'linkyfystr'
})

export class LinkyfyPipe implements Transformer {

    transform( str: string ){
        return str ? linkyfystr( str ) : str;
    }
}