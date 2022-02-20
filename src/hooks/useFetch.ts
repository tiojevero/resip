import { ref } from "vue";

export default function (url: string) {
    const data: any = ref(null);
    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/${url}`
            );
            const json = await response.json();
            data.value = json;
        } catch (errors) {
            console.log(errors);
        }
    };
    return { data, fetchData };
}
