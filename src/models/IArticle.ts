export interface IArticle {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    getFormattedDate(): string; // ISO 형식에서 yyyy-mm-dd 형식으로 날짜를 변환하는 함수
}