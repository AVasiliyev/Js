import {MathHelper} from "./MathHelper"

class Main {
    public static Start(): number {
        let ar;

        ar = [5, 6, 122, 234, 123];
        //console.log("Max of [" + ar + "] = " + MathHelper.FindMaxInArray(ar));
        //console.log("Min of [" + ar + "] = " + MathHelper.FindMinInArray(ar));
        console.log("2 Max of [" + ar + "] = " + MathHelper.Find2MaxInArray(ar));
        console.log("2 Min of [" + ar + "] = " + MathHelper.Find2MinInArray(ar));
        console.log("");

        ar = [5, 6, -123, -234, -123];        
        //console.log("Max of [" + ar + "] = " + MathHelper.FindMaxInArray(ar));
        //console.log("Min of [" + ar + "] = " + MathHelper.FindMinInArray(ar));
        console.log("2 Max of [" + ar + "] = " + MathHelper.Find2MaxInArray(ar));
        console.log("2 Min of [" + ar + "] = " + MathHelper.Find2MinInArray(ar));
        console.log("");

        ar = [-5, 6, 0, -234, -123];        
        //console.log("Max of [" + ar + "] = " + MathHelper.FindMaxInArray(ar));        
        //console.log("Min of [" + ar + "] = " + MathHelper.FindMinInArray(ar));
        console.log("2 Max of [" + ar + "] = " + MathHelper.Find2MaxInArray(ar));
        console.log("2 Min of [" + ar + "] = " + MathHelper.Find2MinInArray(ar));
        console.log("");
        
        return 0;
    }
}

Main.Start();
