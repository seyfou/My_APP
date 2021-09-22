const mongoose=require("mongoose");
const schema=mongoose.Schema;
const UserSchema=new schema({
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
    password:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAAARVBMVEXGzeD////Byd3FzOD///3n6/HEzd/Byd7+/v/7+/zL0uPu8PbGzODd4uzk6PDv8vbU2ujX3er29/rP1eb09/fW2ufc4O2bu+3UAAAFIUlEQVR4nO2d23LjIAxAQcLyrXZsnOb/P3XB3jZN27RGtCWJdGb2bTvjnBEIC4GNURRFURRFURRFURRFURRFURRFURRFURRF+QRc/6Gh0g9yVyDVNRAu87youJ0QgJmGyjfORjos/UB3AAB10+gbazdpzi9Q+pluGzIIZhn71r7BHVCj7SsQoRv6IMpdaKuAdHq7Roiouhu83cbmhbiTWrsO4HRwl75eGEGH6ecQQQy1T62FUVsZUnOfgPXQfu5sE2fbk+bT96CB5Xgl1M7meqO54RIylfva2mqunevST3pTwNR+K20LuVHFvfJEpx3BtolzXrPDCzDavd4CbafpYQWqbxLC+5jTukgEhiRrERUXMumcai0Maq2MGPPVYveauEZ8JS5Mbmmz28ZR+HIEu3Rna8SNskdqDDeWNyd7pGLDGKQrleSAw8k2TG9W8rZgWIRw480upR++INDzvU2lH74cCD1bm2RvFOKN703u/JblbZa7EMnx5iQvRHLiTb2pt1TgoN4YYIY3yfObeuOh3liQqXUdwkLjjQft26ZXb5eQemOh3nioNx7qjYd646HeeKg3HuqNSYY30XUkzPImdmMGQeONweQ9f/vUVkuHIiOu9gnd0B9xtpW5E1hnbC6s3oS21sCQ5c3aI4kcqJjeEX1JLzMzMDrJ1ZtZmwbVG4clK5/GI9Clf0Eh8rTZQeY6xADjyMeZRmwnF/iscHPdU+lfUIa8ha+zEhdvEczoJo/3/oj1lpcYBqnpFLmnjDakhlugs459XuYg+AIbnLlLX9d2guONn1LbTvT9XDDy4s154Qd3F+Y4FftuuoE1851hkZsUVmreUqQp/dylYRbLpZbeXiBm8VJqCelMl3I30n8a25V+7OKAT39jcF7wu8J/4JQebi680gte9G5Q+jht9Q44QyGjJo5Up5cOxiJcchNcK36MruCzSxiq4b8OcjvfLqiHpHp5L7oS8hYY91tbtxXU2wqllJP01uhXEJf9I1XwPTUfwGl/ZlBvZ2JVZK849XaGEqpw6u0VSrn6WL2dgYSGfPX2CqV0JoneN72EcL82pyXLM7Rfm3607UzC7cfq7Q1JmzM6Tjcw1sr3a3NCT7O9Bw0gpdRDFgIjtLH3LUTxLtqUSrmrtP5mTJ0QaxuNm8SnBjJwTPUWWy1LP3dpMO7Xp2pzQg/sXsDpD2nET3AEjMOU0j9aEeHcONjox3dZbVxO9NmFFThw+nud+PZeRjZdEd1ZgxS/qMjyZk+Cex1qnLgH25zvQF5TEpmn+JX6MTYicc8ZWT90NUoarWSCNJgPmbcSBA4nrOWYC9Pa1DvnmpxTuzHi4p/3MwnpWQVzyjtX/9ZdiFk/do8fdIDTgX3i9CqHGR856AhoaF8G2E8Swq7qHrU1H8OsZtn583v8YOoHCzpcZ7Xjrymza9tvCLq49/BAEHQV+4OdSfaOo3mYmY7gOe9mwSSaaqlj0N33lhdhbUIu+ItYO7POdPe9yxpeppxlnPjLIKbrNqTX0j+dD8Gyltd+fuGxw12/xNXwHQYdwHTMuFYlW5zz8/1l1yeEwZeItFdxLiTwNmbXewJh/rF30BxcmOjuZqgSRWulAu0DVXcfBU5c57XStl6I2fwukitRxjdNf4lmPeh70wO2Hv7khSoNZ7256WoJYf+LFY8cbvvaM/JpLYB/SFvazXUIf7VUlIm/1a1qRFbTwl/hbrXbMPM7FL+Ou82T0jTfcrRFbvPyM8y6bfxP+LlPIP0Dvn87rnGdaLcAAAAASUVORK5CYII="
    
    },

    isAdmin:{
       type:Boolean,
       default: false,
    },
    phone:{
        type:String,
        default: "12345678",
    
   
    }


});


module.exports=mongoose.model("user",UserSchema)