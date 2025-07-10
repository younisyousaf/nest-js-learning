import { IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class UpdatePostDto {
    @IsOptional()
    @IsNotEmpty({ message: 'Title is required' })
    @IsString({ message: "Title must be a string" })
    @MinLength(3, { message: "Title must be at least 3 characters long" })
    @MaxLength(50, { message: "Title can not be longer than 50 characters" })
    title?: string;

    @IsOptional()
    @IsNotEmpty({ message: 'Content is required' })
    @IsString({ message: "Content must be a string" })
    @MinLength(5, { message: "Content must be at least 3 characters long" })
    @MaxLength(100, { message: "Content can not be longer than 100 characters" })
    content?: string;

    @IsOptional()
    @IsNotEmpty({ message: 'Author name is required' })
    @IsString({ message: "Author name must be a string" })
    @MinLength(3, { message: "Author name must be at least 3 characters long" })
    @MaxLength(25, { message: "Author name can not be longer than 25 characters" })
    authorName?: string;

}