import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-aside-post',
  imports: [],
  template: `
     <div class="skeleton-current-post bg-slate-200 dark:bg-slate-700 px-8 py-4 rounded-2xl mb-10">
                    <span class="block w-72 h-8 bg-slate-400"></span>
                    <div class="pt-4">     
                            <div class="skeleton-article flex flex-col lg:flex-row mb-6 gap-4">
                                <div class="skeleton-img h-[225px] max-h-[225px] lg:max-w-[280px] lg:max-h-[150px] size-full rounded-2xl bg-slate-400"></div>
    
                                <div class="w-full lg:w-2/3 ml-4">
                                    <span class="block w-72 h-10 bg-slate-400"></span>
                                    <span class="block w-32 h-6 bg-slate-400 mt-4"></span>
                                </div>
                            </div>
                        
                    </div>
                </div>
  `,
  styleUrl: './skeleton-aside-post.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonAsidePostComponent { }
