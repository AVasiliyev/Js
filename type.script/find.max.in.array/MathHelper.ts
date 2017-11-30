export class MathHelper {
    public static FindMaxInArray(array : number[]): number{
        
        let res = array[0];

        array.forEach(elm => {
            if(elm > res)
                res = elm;
        });
        
        return res;}

    public static FindMinInArray(array : number[]): number {
        
        let res = array[0];

        array.forEach(elm => {
            if(elm < res)
                res = elm;
        });
        
        return res;    }

    public static Find2MaxInArray(array : number[]): number[] {
        
        let resMin;
        let resMax;

            if(array[0]<array[1])
            {
                resMin = array[0];
                resMax = array[1];
            }
            else
            {
                resMin = array[1];
                resMax = array[0];
            }

        for(let i=2; i< array.length; i++)        
        {
            let elm = array[i];
            
            if(elm > resMax)
                {
                    resMin = resMax;
                    resMax = elm;
                }
            else if (elm > resMin)
                {
                    resMin = elm;
                }        
        }            
        // array.forEach(elm => {
        //     if(elm > resMax)
        //         {
        //             resMin = resMax;
        //             resMax = elm;
        //         }
        //     else if (elm > resMin)
        //         {
        //             resMin = elm;
        //         }

        // });
        
        return [resMin, resMax];    }

    public static Find2MinInArray(array : number[]): number[] {
        
        let resMin;
        let resMax;

        if(array[0]<array[1])
            {
                resMin = array[1];
                resMax = array[0];
            }
            else
            {
                resMin = array[0];
                resMax = array[1];
            }
        

        for(let i=2; i< array.length; i++)        
        {
            let elm = array[i];
            
            if(elm < resMin)
                {
                    resMax = resMin;
                    resMin =  elm;                    
                }
            else if (elm < resMax)
                {
                    resMax = elm;
                }            
        }

        // array.forEach(elm => {
        //     if(elm < resMin)
        //         {
        //             resMax = resMin;
        //             resMin =  elm;                    
        //         }
        //     else if (elm < resMax)
        //         {
        //             resMax = elm;
        //         }

        // });
        
        return [resMin, resMax];    }}

