import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { ContentfulService } from '../../services/contentful.service';
import { RouterLink } from '@angular/router';
import { FollowCardComponent } from "@mas/pages/blog/components/follow-card/follow-card.component";

@Component({
  selector: 'app-blog-tag',
  imports: [
    RouterLink,
    FollowCardComponent
],
  templateUrl: './blog-tag.component.html',
  styleUrl: './blog-tag.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BlogTagComponent { 

  idtag = input.required<string>();
  tag = input.required<string>();

  private readonly blogService = inject(ContentfulService);
  isLoading = signal(true);
}
